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
		"content": `<style>.o5z_yobji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 10.25c-.75-1.5-.75-3.25 0-5l.761 1.522l.989.228C10.5 5 11.5 3.75 13 2.75c.25 2 1.5 3 2.25 4.25l.964 1.607l-.714 1.643Zm0 0h8l-.62.79l-1.51 1.92l-.62.79l-.03 1l-.19 5.5l-.03 1h-3l-.03-1l-.19-5.5l-.03-1l-.62-.79l-1.51-1.92l-.62-.79z");
}
</style><path class="o5z_yobji"/>`,
		"fallback": "iconoven:relay-torch-sharp",
	});
}

export default Component;
