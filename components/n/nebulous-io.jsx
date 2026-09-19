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
		"content": `<style>.s_c39hb1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.182 18.427l.162 15.715m-2.191.951l-13.172-13.45m-8.041 2.619l-1.674 7.932m12.5-17.271a9.423 9.423 0 1 1-18.846 0a9.423 9.423 0 0 1 18.846 0m-8.134 22.403a5.174 5.174 0 0 1-5.174 5.174h0a5.174 5.174 0 0 1-5.174-5.174h0a5.174 5.174 0 0 1 5.174-5.174h0a5.174 5.174 0 0 1 5.174 5.174M41.08 15.282a3.143 3.143 0 0 1-3.144 3.143h0a3.143 3.143 0 0 1-3.144-3.143v0a3.143 3.143 0 0 1 3.144-3.143h0a3.143 3.143 0 0 1 3.143 3.143zm-.57 21.248a2.4 2.4 0 0 1-2.4 2.4h0a2.4 2.4 0 0 1-2.4-2.4v0a2.4 2.4 0 0 1 2.4-2.4h0a2.4 2.4 0 0 1 2.4 2.4");
}
</style><path class="s_c39hb1w"/>`,
		"fallback": "arcticons:nebulous-io",
	});
}

export default Component;
