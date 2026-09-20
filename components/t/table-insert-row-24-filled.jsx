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
		"content": `<style>.aippnozkq {
  fill: currentColor;
  d: path("M20.25 4.5H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5M8 8H5.25C4.007 8 3 8.895 3 10v4c0 1.105 1.007 2 2.25 2H8zm1.5 8h5V8h-5zm9.25 0H16V8h2.75c1.243 0 2.25.895 2.25 2v4c0 1.105-1.007 2-2.25 2m-15 5h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5");
}
</style><path class="aippnozkq"/>`,
		"fallback": "fluent:table-insert-row-24-filled",
	});
}

export default Component;
