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
		"content": `<style>.j974kgh1k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.22 2.322l6.75 3.772q.321.18.562.407q-.213-.009-.398.094L12 11.141L3.866 6.595q-.186-.103-.398-.094q.241-.227.562-.407l6.75-3.772q1.22-.682 2.44 0m7.646 5.583q.2-.112.303-.317q.081.321.081.689v7.446q0 1.467-1.28 2.183l-6.75 3.772q-.304.169-.607.255q.137-.195.137-.433v-9.06zM11.25 12.44L3.134 7.905q-.2-.112-.304-.317q-.08.321-.08.689v7.446q0 1.467 1.28 2.183l6.75 3.772q.304.169.607.255q-.137-.195-.137-.433z");
}
</style><path class="j974kgh1k"/>`,
		"fallback": "uix-solid:volume-cube",
	});
}

export default Component;
