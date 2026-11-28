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
		"content": `<style>.td_sb488a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.3937 9.0531C6.1407 9.6509 6 10.3087 6 11V15C6 15.5523 5.5523 16 5 16C3.3431 16 2 14.6569 2 13V9V5C2 3.3431 3.3431 2 5 2H9H13C14.6569 2 16 3.3431 16 5C16 5.5523 15.5523 6 15 6H11C9.6198 6 8.367 6.5618 7.4645 7.4644C7.0133 7.9155 6.6471 8.4546 6.3937 9.0531ZM15 22H11C9.3431 22 8 20.6569 8 19C8 18.4477 8.4477 18 9 18H11H13C14.3804 18 15.6317 17.4394 16.5356 16.5356C17.4394 15.6317 18 14.3804 18 13V10.5V9C18 8.4477 18.4477 8 19 8C20.6569 8 22 9.3431 22 11V15V19C22 20.6569 20.6569 22 19 22H15ZM11 16H9C8.4477 16 8 15.5523 8 15V11C8 9.3431 9.3431 8 11 8H15C15.5523 8 16 8.4477 16 9V10.5V13C16 14.6569 14.6569 16 13 16H11Z");
}
</style><path clip-rule="evenodd" class="td_sb488a"/>`,
		"fallback": "keyline-icons:squares-divide-fill",
	});
}

export default Component;
