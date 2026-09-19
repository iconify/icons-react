import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gt-cm4b7h {
  d: path("m14.107 15.783l9.74-5.624l9.953 5.746v5.197l-9.682-5.59l-4.793 2.768l14.52 8.383l4.746-2.773m.041 5.683L23.85 38.127l-14.462-8.56");
}

.r6wlaubpr {
  d: path("m9.435 24.12l14.672 8.47l4.767-2.752l-14.87-8.586v-5.271");
}

.ud-85vb9a {
  d: path("m9.365 24.028l.002-.016l-.002-11.039L24.042 4.5l14.593 8.426v10.957m0 5.952V35l-14.723 8.5l-14.547-8.241h0V30.17");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ud-85vb9a"/><path class="gt-cm4b7h"/><path class="r6wlaubpr"/></g>`,
		"fallback": "arcticons:super-status-bar",
	});
}

export default Component;
