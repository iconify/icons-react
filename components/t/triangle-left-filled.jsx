import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b1f8dbbnj {
  d: path("M14.5 3.365a1 1 0 0 1 1.5.866V15.77a1 1 0 0 1-1.5.866l-9.999-5.769a1 1 0 0 1 0-1.732zM9.003 10L13 12.306V7.694z");
}

.ctzf_3bwk {
  d: path("M4.501 10.866a1 1 0 0 1 0-1.732l10-5.769A1 1 0 0 1 16 4.231V15.77a1 1 0 0 1-1.5.866z");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="ctzf_3bwk"/><path class="b1f8dbbnj"/></g>`,
		"fallback": "pepicons-pop:triangle-left-filled",
	});
}

export default Component;
