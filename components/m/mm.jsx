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
		"content": `<style>.piarl2bel {
  d: path("M20.296 5.5c-.83 0-1.5 1.057-1.5 2.369l1.221 3.733l-1.22 10.47C11.735 23.348 7.079 25.53 5.5 28.819V41.17c0 .737.668 1.329 1.5 1.329h34c.831 0 1.5-.592 1.5-1.329V28.818c-1.579-3.288-6.235-5.47-13.297-6.745l-1.22-10.47l1.22-3.734c0-1.312-.668-2.369-1.5-2.369z");
}

.rw09zsbqf {
  d: path("M9.152 28.276h29.696c.829 0 1.5.769 1.5 1.718v8.668c0 .949-.671 1.718-1.5 1.718H9.152c-.829 0-1.5-.77-1.5-1.718v-8.668c0-.95.671-1.719 1.5-1.719");
}

.tqe3clkcz {
  d: path("M14.236 38.43v-8.213l4.111 8.222l4.111-8.21v8.21m3.084-.009v-8.213l4.111 8.222l4.111-8.21v8.21M20.017 11.602h7.966");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="piarl2bel"/><path class="rw09zsbqf"/><path class="tqe3clkcz"/></g>`,
		"fallback": "arcticons:mm",
	});
}

export default Component;
