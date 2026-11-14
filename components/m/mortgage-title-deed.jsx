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
		"content": `<style>.ulssmudpy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.25 1.75h13.5q2.5 0 2.5 2.5q0 1.036-.732 1.768q-.549.548-1.268.686v10.574q2 .236 2 2.472q0 1.036-.732 1.768t-1.768.732H5.25q-1.036 0-1.768-.732T2.75 19.75q0-2.236 2-2.472V6.704q-.719-.138-1.268-.686q-.732-.732-.732-1.768t.732-1.768T5.25 1.75m12.5 15.5V6.75H6.25v10.5zm-9.341-5.719l2-2q.659-.66 1.591-.66t1.591.66l2 2q.659.659.659 1.59V14q0 .932-.659 1.591T14 16.25h-4q-.932 0-1.591-.659T7.75 14v-.879q0-.931.658-1.59z");
}
</style><path class="ulssmudpy"/>`,
		"fallback": "uix-solid:mortgage-title-deed",
	});
}

export default Component;
