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
		"content": `<style>.w6n-4uduf {
  fill: currentColor;
  d: path("M14.591 14.091q1.063-1.062 1.063-2.591T14.59 8.909T12 7.846T9.409 8.91T8.346 11.5t1.063 2.591T12 15.154t2.591-1.063m-4.503-.678Q9.3 12.625 9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2t-1.912-.787M6.56 16.43q-2.474-1.57-3.997-4.116q-.125-.205-.178-.404t-.053-.411t.053-.41t.178-.406Q4.087 8.14 6.56 6.57T12 5t5.44 1.57t3.997 4.115q.125.205.178.404t.052.411t-.052.41t-.178.406q-1.523 2.545-3.997 4.115T12 18t-5.44-1.57");
}
</style><path class="w6n-4uduf"/>`,
		"fallback": "material-symbols-light:visibility-rounded",
	});
}

export default Component;
