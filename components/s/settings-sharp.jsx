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
		"content": `<style>.gonl7w61s {
  d: path("m10.36 4.57l.1-.96l.07-.74h2.94l.07.74l.1.96l.07.74l.69.29l.43.18l.69.29l.58-.48l.74-.61l.58-.48l.53.53l1.02 1.02l.53.53l-.48.58l-.61.74l-.48.58l.29.69l.18.43l.29.69l.74.07l.96.1l.74.07v2.94l-.74.07l-.96.1l-.74.07l-.29.69l-.18.43l-.29.69l.48.58l.61.74l.48.58l-.53.53l-1.02 1.02l-.53.53l-.58-.48l-.74-.61l-.58-.48l-.69.29l-.43.18l-.69.29l-.07.74l-.1.96l-.07.74h-2.94l-.07-.74l-.1-.96l-.07-.74l-.69-.29l-.43-.18l-.69-.29l-.58.48l-.74.61l-.58.48l-.53-.53l-1.02-1.02l-.53-.53l.48-.58l.61-.74l.48-.58l-.29-.69l-.18-.43l-.29-.69l-.74-.07l-.96-.1l-.74-.07v-2.94l.74-.07l.96-.1l.74-.07l.29-.69l.18-.43l.29-.69l-.48-.58l-.61-.74l-.48-.58l.53-.53l1.02-1.02l.53-.53l.58.48l.74.61l.58.48l.69-.29l.43-.18l.69-.29z");
}

.gp0egaclj {
  cx: 12px;
  cy: 12px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gonl7w61s"/><circle class="gp0egaclj"/></g>`,
		"fallback": "iconoven:settings-sharp",
	});
}

export default Component;
