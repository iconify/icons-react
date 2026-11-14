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
		"content": `<style>.rdbg4izjo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.688 1.75h2.625q2.937.001 2.937 2.938v.625q-.001 2.936-2.937 2.937h-.563v2H17q2.25 0 2.25 2.25v1.75h.063q2.937.001 2.937 2.938v1.125q-.001 2.936-2.937 2.937h-1.625q-2.937 0-2.938-2.937v-1.125q0-2.938 2.938-2.938h.062V12.5q0-.75-.75-.75H7q-.75 0-.75.75v1.75h.063q2.937.001 2.937 2.938v1.125q-.001 2.936-2.937 2.937H4.688q-2.937 0-2.938-2.937v-1.125q0-1.217.861-2.077q.86-.861 2.077-.861h.062V12.5q0-2.25 2.25-2.25h4.25v-2h-.562q-2.937 0-2.938-2.937v-.625q0-1.217.861-2.077q.86-.861 2.077-.861");
}
</style><path class="rdbg4izjo"/>`,
		"fallback": "uix-solid:org-node",
	});
}

export default Component;
