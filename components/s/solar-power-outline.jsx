import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.puue6ym4r {
  fill: currentColor;
  d: path("m3.212 20.962l1.596-7.981h14.365l1.596 7.98zM3.692 4V3h2.712v1zm.758 15.962h7.05V17.5H4.946zM6.01 9.229l-.714-.688L7.21 6.627l.714.689zM5.154 16.5H11.5v-2.52H5.65zM9.136 5.845Q7.962 4.671 7.962 2.981h1q0 1.269.884 2.154q.885.884 2.154.884t2.154-.884t.885-2.154h1q0 1.69-1.174 2.864T12 7.02T9.136 5.845m2.364 5.347V8.481h1v2.711zm1 8.77h7.03l-.495-2.462H12.5zm0-3.462h6.327l-.496-2.52H12.5zm5.529-7.252l-1.927-1.932l.689-.689l1.951 1.908zM17.596 4V3h2.712v1z");
}
</style><path class="puue6ym4r"/>`,
		"fallback": "material-symbols-light:solar-power-outline",
	});
}

export default Component;
