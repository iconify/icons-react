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
		"content": `<style>.mlt6o9eyp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.75 2.75h-6q-1.036 0-1.768.732T3.25 5.25q0 2.5 2.5 2.5h6q.195 0 .375-.015q.18.015.375.015h5.75q2.5 0 2.5-2.5q0-1.036-.732-1.768T18.25 2.75H12.5q-.22 0-.421.019q-.16-.019-.329-.019M4 9.25q-2.25 0-2.25 2.25v8q0 2.25 2.25 2.25h5q2.25 0 2.25-2.25V13q0-2.25-2.25-2.25H7.811L6.53 9.47q-.105-.106-.243-.163T6 9.25zm8.75 2.25q0-2.25 2.25-2.25h2q.149 0 .287.057t.243.163l1.281 1.28H20q2.25 0 2.25 2.25v6.5q0 2.25-2.25 2.25h-5q-2.25 0-2.25-2.25z");
}
</style><path class="mlt6o9eyp"/>`,
		"fallback": "uix-solid:project-linked",
	});
}

export default Component;
