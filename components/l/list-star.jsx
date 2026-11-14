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
		"content": `<style>.fojhxibxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5.5h.01M8 5.5h12.5M4 11.5h.01m3.99 0h12.5M4 17.5h.01m3.99 0h4m6.514-1.833l.177.315a1.5 1.5 0 0 0 1.015.737l.354.071a.59.59 0 0 1 .318.978l-.245.265a1.5 1.5 0 0 0-.388 1.193l.042.359a.59.59 0 0 1-.832.605l-.328-.151a1.5 1.5 0 0 0-1.254 0l-.328.151a.59.59 0 0 1-.832-.605l.042-.359a1.5 1.5 0 0 0-.388-1.193l-.245-.265a.59.59 0 0 1 .318-.978l.354-.071a1.5 1.5 0 0 0 1.015-.737l.177-.315a.59.59 0 0 1 1.028 0");
}
</style><path class="fojhxibxx"/>`,
		"fallback": "uix:list-star",
	});
}

export default Component;
