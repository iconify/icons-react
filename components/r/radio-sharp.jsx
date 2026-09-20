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
		"content": `<style>.r_h-wbb4d {
  fill: currentColor;
  d: path("M3 21V7.227l11.9-4.842l.342.88L6.031 7H21v14zm6.342-3.234q.62-.62.62-1.497t-.62-1.496t-1.496-.62t-1.496.62t-.62 1.496t.62 1.497t1.496.619t1.496-.62M4 11.54h12.5V9.692h1v1.847H20V8H4z");
}
</style><path class="r_h-wbb4d"/>`,
		"fallback": "material-symbols-light:radio-sharp",
	});
}

export default Component;
