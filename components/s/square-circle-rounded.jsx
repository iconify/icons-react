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
		"content": `<style>.zqj54qbmc {
  fill: currentColor;
  d: path("M8.5 16.5h7q.425 0 .713-.288t.287-.712v-7q0-.425-.288-.712T15.5 7.5h-7q-.425 0-.712.288T7.5 8.5v7q0 .425.288.713t.712.287m-.4 4.713q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788");
}
</style><path class="zqj54qbmc"/>`,
		"fallback": "material-symbols:square-circle-rounded",
	});
}

export default Component;
