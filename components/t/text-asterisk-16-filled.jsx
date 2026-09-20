import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m697vtbai {
  fill: currentColor;
  d: path("M8 14.25a.75.75 0 0 1-.75-.75V9.811L4.641 12.42a.75.75 0 0 1-.531.219a.75.75 0 0 1-.53-.219a.75.75 0 0 1 0-1.061L6.189 8.75h-3.69a.75.75 0 0 1 0-1.5h3.689L3.579 4.641a.75.75 0 0 1 0-1.061a.74.74 0 0 1 .53-.219c.2 0 .389.078.53.219l2.609 2.609V2.5a.75.75 0 0 1 1.5 0v3.689l2.609-2.609a.75.75 0 0 1 1.06 0a.75.75 0 0 1 0 1.061L9.808 7.25h3.689a.75.75 0 1 1 .002 1.5H9.81l2.609 2.609a.75.75 0 0 1-1.062 1.061L8.748 9.811V13.5a.75.75 0 0 1-.75.75z");
}
</style><path class="m697vtbai"/>`,
		"fallback": "fluent:text-asterisk-16-filled",
	});
}

export default Component;
