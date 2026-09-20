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
		"content": `<style>.hkoj8rz-p {
  fill: currentColor;
  d: path("M3 21V7.227l11.9-4.842l.342.88L6.031 7H21v14zm1-1h16v-7.461H4zm5.342-2.234q.62-.62.62-1.497t-.62-1.496t-1.496-.62t-1.496.62t-.62 1.496t.62 1.497t1.496.619t1.496-.62M4 11.54h12.5V9.692h1v1.847H20V8H4zM4 20v-7.461z");
}
</style><path class="hkoj8rz-p"/>`,
		"fallback": "material-symbols-light:radio-outline-sharp",
	});
}

export default Component;
