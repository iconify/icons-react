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
		"content": `<style>.v8qkblq3k {
  fill: currentColor;
  d: path("M18 2q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2zm0 2H6v16h12zm-2 3H8v10h8zm-2 2v4h-4V9zm-2 8.75q-.325 0-.537.213t-.213.537t.213.538t.537.212t.538-.213t.212-.537t-.213-.537T12 17.75m0-13q-.325 0-.537.213t-.213.537t.213.538t.537.212t.538-.213t.212-.537t-.213-.537T12 4.75M12 12");
}
</style><path class="v8qkblq3k"/>`,
		"fallback": "material-symbols:switch-off-outline",
	});
}

export default Component;
