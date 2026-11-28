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
		"content": `<style>.s55k0kb_s {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2C14.071 2 16 3.929 16 6C16 8.071 14.071 10 12 10C9.929 10 8 8.071 8 6C8 3.929 9.929 2 12 2ZM11 12H13C16.728 12 20 15.272 20 19V21C20 21.552 19.552 22 19 22H5C4.448 22 4 21.552 4 21V19C4 15.272 7.272 12 11 12Z");
}
</style><path clip-rule="evenodd" class="s55k0kb_s"/>`,
		"fallback": "keyline-icons:user-sharp-fill",
	});
}

export default Component;
