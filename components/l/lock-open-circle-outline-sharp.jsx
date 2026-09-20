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
		"content": `<style>.s7tar24-w {
  fill: currentColor;
  d: path("M8 16h8v-6h-1.5V8.5q0-1.05-.725-1.775T12 6t-1.775.725T9.5 8.5H11q0-.425.288-.712T12 7.5t.713.288T13 8.5V10H8zm4 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8");
}
</style><path class="s7tar24-w"/>`,
		"fallback": "material-symbols:lock-open-circle-outline-sharp",
	});
}

export default Component;
