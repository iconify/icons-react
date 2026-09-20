import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ghvjqi5fc {
  fill: var(--svg-color--fff, #fff);
  d: path("M20 4a2 2 0 0 0-4 0v8a2 2 0 0 0 4 0zm0 20a2 2 0 0 0-4 0v8a2 2 0 0 0 4 0zM4 16a2 2 0 0 0 0 4h8a2 2 0 0 0 0-4zm20 0a2 2 0 0 0 0 4h8a2 2 0 0 0 0-4zm-8.829-2.243a.999.999 0 1 1-1.414 1.414L6.272 7.687a1 1 0 1 1 1.415-1.415zm14.557 14.556a1 1 0 0 1 0 1.414a1 1 0 0 1-1.414 0l-7.485-7.485a.999.999 0 1 1 1.414-1.414zm-15.971-7.485a.999.999 0 1 1 1.414 1.414l-7.485 7.486a1 1 0 1 1-1.415-1.415zM28.313 6.272a1 1 0 0 1 1.414 0a1 1 0 0 1 0 1.414l-7.485 7.485a.999.999 0 1 1-1.414-1.414z");
}

.u5zlojb3x {
  fill: var(--svg-color--77b255, #77b255);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.vkebibbge {
  cx: 18px;
  cy: 18px;
  r: 3px;
  fill: var(--svg-color--fff, #fff);
}
</style><path class="u5zlojb3x"/><circle class="vkebibbge"/><path class="ghvjqi5fc"/>`,
		"fallback": "twemoji:sparkle",
	});
}

export default Component;
