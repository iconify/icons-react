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
		"content": `<style>.r1vx5pbig {
  fill: currentColor;
  d: path("M5.5 17.116v-12h16v12zm8-3.424q.825 0 1.413-.587t.587-1.413h5V6.116h-14v5.576h5q0 .825.588 1.413t1.412.587m3.73 6.424H2.5V7.5h1v11.616h13.73z");
}
</style><path class="r1vx5pbig"/>`,
		"fallback": "material-symbols-light:stacked-inbox-sharp",
	});
}

export default Component;
