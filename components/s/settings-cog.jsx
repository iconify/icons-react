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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vxo3gieyf {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.x6z-9mbru {
  d: path("m10.573 4.033l.032-.285a1.31 1.31 0 0 1 1.302-1.163h.186a1.31 1.31 0 0 1 1.302 1.163l.032.285a1.5 1.5 0 0 0 .917 1.218l.771.32a1.5 1.5 0 0 0 1.51-.214l.223-.178a1.31 1.31 0 0 1 1.744.097l.132.132a1.31 1.31 0 0 1 .097 1.744l-.178.223a1.5 1.5 0 0 0-.214 1.51l.32.771a1.5 1.5 0 0 0 1.218.917l.285.032a1.31 1.31 0 0 1 1.163 1.302v.186a1.31 1.31 0 0 1-1.163 1.302l-.285.032a1.5 1.5 0 0 0-1.218.917l-.32.771a1.5 1.5 0 0 0 .214 1.51l.178.223a1.31 1.31 0 0 1-.097 1.744l-.132.132a1.31 1.31 0 0 1-1.744.097l-.223-.178a1.5 1.5 0 0 0-1.51-.214l-.771.32a1.5 1.5 0 0 0-.917 1.218l-.032.285a1.31 1.31 0 0 1-1.302 1.163h-.186a1.31 1.31 0 0 1-1.302-1.163l-.032-.285a1.5 1.5 0 0 0-.917-1.218l-.771-.32a1.5 1.5 0 0 0-1.51.214l-.223.178a1.31 1.31 0 0 1-1.744-.097l-.132-.132a1.31 1.31 0 0 1-.097-1.744l.178-.223a1.5 1.5 0 0 0 .214-1.51l-.32-.771a1.5 1.5 0 0 0-1.218-.917l-.285-.032a1.31 1.31 0 0 1-1.163-1.302v-.186a1.31 1.31 0 0 1 1.163-1.302l.285-.032a1.5 1.5 0 0 0 1.218-.917l.32-.771a1.5 1.5 0 0 0-.214-1.51l-.178-.223a1.31 1.31 0 0 1 .097-1.744l.132-.132a1.31 1.31 0 0 1 1.744-.097l.223.178a1.5 1.5 0 0 0 1.51.214l.771-.32a1.5 1.5 0 0 0 .917-1.218");
}
</style><g class="hntgybcog"><path class="x6z-9mbru"/><path class="vxo3gieyf"/></g>`,
		"fallback": "uix:settings-cog",
	});
}

export default Component;
