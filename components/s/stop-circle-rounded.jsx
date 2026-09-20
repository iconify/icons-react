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
		"content": `<style>.u_fd4xu0b {
  fill: currentColor;
  d: path("M9 16h6q.425 0 .713-.288T16 15V9q0-.425-.288-.712T15 8H9q-.425 0-.712.288T8 9v6q0 .425.288.713T9 16m3 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="u_fd4xu0b"/>`,
		"fallback": "material-symbols:stop-circle-rounded",
	});
}

export default Component;
