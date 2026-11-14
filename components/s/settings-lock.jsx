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
		"content": `<style>.bn1de_bku {
  d: path("m8.314 3.755l.006-.084a.93.93 0 0 1 .93-.863a.93.93 0 0 1 .93.863l.006.084a1.39 1.39 0 0 0 .852 1.178a1.39 1.39 0 0 0 1.435-.23l.065-.056a.93.93 0 0 1 1.267.048a.93.93 0 0 1 .048 1.267l-.056.065a1.39 1.39 0 0 0-.23 1.435a1.39 1.39 0 0 0 1.178.852l.084.006a.93.93 0 0 1 .863.93a.93.93 0 0 1-.863.93l-.084.006a1.39 1.39 0 0 0-1.178.852a1.39 1.39 0 0 0 .23 1.435l.056.065a.93.93 0 0 1-.048 1.267a.93.93 0 0 1-1.267.048l-.065-.056a1.39 1.39 0 0 0-1.435-.23a1.39 1.39 0 0 0-.852 1.178l-.006.084a.93.93 0 0 1-.93.863a.93.93 0 0 1-.93-.863l-.006-.084a1.39 1.39 0 0 0-.852-1.178a1.39 1.39 0 0 0-1.435.23l-.065.056a.93.93 0 0 1-1.267-.048a.93.93 0 0 1-.048-1.267l.056-.065a1.39 1.39 0 0 0 .23-1.435a1.39 1.39 0 0 0-1.178-.852l-.084-.006a.93.93 0 0 1-.863-.93a.93.93 0 0 1 .863-.93l.084-.006a1.39 1.39 0 0 0 1.178-.852a1.39 1.39 0 0 0-.23-1.435l-.056-.065a.93.93 0 0 1 .048-1.267a.93.93 0 0 1 1.267-.048l.065.056a1.39 1.39 0 0 0 1.435.23a1.39 1.39 0 0 0 .852-1.178");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oifarabdc {
  d: path("M7.5 9.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m9.25 8.5h2.5A1.75 1.75 0 0 1 21 19.5v.25a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-.25a1.75 1.75 0 0 1 1.75-1.75m-.25 0V16.5a1.5 1.5 0 0 1 3 0v1.25");
}
</style><g class="hntgybcog"><path class="bn1de_bku"/><path class="oifarabdc"/></g>`,
		"fallback": "uix:settings-lock",
	});
}

export default Component;
