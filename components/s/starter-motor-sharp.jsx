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
		"content": `<style>.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wrv5n45ym {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11H13.5v8H2.75zm3.75 0v8M4.75 5H13v3.75H4.75zm8.75 10h2.25m2.34-1.95l-.01-.37l-.02-.39h.88l-.02.39l-.01.37l-.01.4l.34.2l.06.03l.34.2l.34-.21l.31-.19l.34-.22l.2.35l.04.07l.2.34l-.35.19l-.33.17l-.35.19v.86l.35.19l.33.17l.35.19l-.2.34l-.04.07l-.2.35l-.34-.22l-.31-.19l-.34-.21l-.34.2l-.06.03l-.34.2l.01.4l.01.37l.02.39h-.88l.02-.39l.01-.37l.01-.4l-.34-.2l-.06-.03l-.34-.2l-.34.21l-.31.19l-.34.22l-.2-.35l-.04-.07l-.2-.34l.35-.19l.33-.17l.35-.19v-.86l-.35-.19l-.33-.17l-.35-.19l.2-.34l.04-.07l.2-.35l.34.22l.31.19l.34.21l.34-.2l.06-.03l.34-.2z");
}

.y-k810yhc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.5 15h.01");
}
</style><g class="ux2u0rbkq"><path class="wrv5n45ym"/><path class="y-k810yhc"/></g>`,
		"fallback": "iconoven:starter-motor-sharp",
	});
}

export default Component;
