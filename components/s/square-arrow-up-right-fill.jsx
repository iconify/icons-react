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
		"content": `<style>.nw_pfl42f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 2C3.7909 2 2 3.79086 2 6V18C2 20.2091 3.7909 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM14.5 8C15.3284 8 16 8.67157 16 9.5V15C16 15.5523 15.5523 16 15 16C14.4477 16 14 15.5523 14 15V11.4141L9.707 15.707C9.3165 16.0976 8.6835 16.0976 8.293 15.707C7.9024 15.3165 7.9024 14.6835 8.293 14.293L12.5859 10H9C8.4477 10 8 9.55229 8 9C8 8.44772 8.4477 8 9 8H14.5Z");
}
</style><path clip-rule="evenodd" class="nw_pfl42f"/>`,
		"fallback": "keyline-icons:square-arrow-up-right-fill",
	});
}

export default Component;
