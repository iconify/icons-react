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
		"content": `<style>.g72u0kbvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.017 18.605l.772-2.831a1.5 1.5 0 0 1 .973-1.028l2.571-.857a1.5 1.5 0 0 1 1.777.679l1.076 1.883a1.5 1.5 0 0 1 .14 1.157l-.515 1.804A1.5 1.5 0 0 1 8.369 20.5H4.464a1.5 1.5 0 0 1-1.447-1.895m10.168.229l.243-2.189a1.5 1.5 0 0 1 .591-1.034l2.508-1.881a1.5 1.5 0 0 1 1.888.071l2.486 2.174a1.5 1.5 0 0 1 .5 1.315l-.237 1.896a1.5 1.5 0 0 1-1.488 1.314h-5a1.5 1.5 0 0 1-1.491-1.666M8.184 6.978L9.83 4.862a1.5 1.5 0 0 1 1.696-.489l3.34 1.215a1.5 1.5 0 0 1 .975 1.608l-.186 1.391a1.5 1.5 0 0 1-1.321 1.293l-2.935.326a1.5 1.5 0 0 1-.767-.117l-1.865-.816a1.5 1.5 0 0 1-.583-2.295");
}
</style><path class="g72u0kbvo"/>`,
		"fallback": "uix:scree",
	});
}

export default Component;
