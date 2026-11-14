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
		"content": `<style>.fnyekjfec {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.122 4.446Q2.251 7.157 2.25 11q0 .227.126.416q.053.08.125.144l.001.001l8.041 7.148Q10 19.208 10 20.25q0 2 2 2t2-2q0-1.042-.543-1.541l8.041-7.148q.107-.096.172-.223q.064-.128.077-.271l.002-.023l.001-.044q-.001-3.843-2.872-6.554Q16.025 1.753 12 1.753T5.122 4.446m6.128 6.976v5.908l-6.93-6.16q1.382-.467 2.764.454q.092.062.199.094q.106.032.217.032t.217-.032q.107-.032.199-.094q1.667-1.111 3.334-.202m1.5 0q1.667-.909 3.334.202q.092.062.199.094q.106.032.217.032t.217-.032t.199-.094q1.382-.921 2.764-.454l-6.93 6.16z");
}
</style><path class="fnyekjfec"/>`,
		"fallback": "uix-solid:parachute",
	});
}

export default Component;
