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
		"content": `<style>.s51dxsbjm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.555 7.055Q1.75 7.861 1.75 9v9q0 2.75 2.75 2.75h15q2.75 0 2.75-2.75V9q0-2.75-2.75-2.75h-2.599l-1.777-2.666q-.051-.077-.12-.139q-.068-.063-.15-.106q-.082-.044-.172-.066T14.5 3.25h-5q-.093 0-.182.023q-.09.022-.172.066q-.082.043-.15.106q-.069.062-.12.139L7.099 6.25H4.5q-1.139 0-1.945.805M7.5 13.25q0-1.864 1.318-3.182T12 8.75t3.182 1.318T16.5 13.25t-1.318 3.182T12 17.75t-3.182-1.318T7.5 13.25");
}
</style><path class="s51dxsbjm"/>`,
		"fallback": "uix-solid:map-photo",
	});
}

export default Component;
