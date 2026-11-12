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
		"content": `<style>.ffmaiwfmc {
  fill: var(--svg-color--fff, #fff);
  d: path("M20.128 11.143c0 5.05-4.058 9.143-9.064 9.143S2 16.192 2 11.143S6.058 2 11.064 2s9.064 4.093 9.064 9.143");
}

.ft5dv1b6b {
  fill: none;
}

.g6odfgc6i {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M8.294 11.143a.76.76 0 0 1 .756-.762h4.028a.76.76 0 0 1 .756.762a.76.76 0 0 1-.756.762H9.05a.76.76 0 0 1-.756-.762");
}

.ixgpzbb0u {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M17.82 19.7a1.77 1.77 0 0 1 1.9-1.917c.189.016.414.084.643.154l.066.02l.06.018c.211.063.42.126.58.212a1.786 1.786 0 0 1 .638 2.55c-.1.151-.255.307-.41.464l-.045.044l-.044.045c-.156.157-.31.313-.46.414a1.754 1.754 0 0 1-2.528-.643a3.3 3.3 0 0 1-.21-.585l-.018-.06l-.02-.067c-.07-.232-.137-.459-.153-.648");
}

.w49j0rbvv {
  fill: currentColor;
  d: path("M0 0h24v24H0z");
}
</style><defs><mask id="SVG3iXhhe3i"><g class="ft5dv1b6b"><path class="ffmaiwfmc"/><path clip-rule="evenodd" class="g6odfgc6i"/><path clip-rule="evenodd" class="ixgpzbb0u"/></g></mask></defs><path mask="url(#SVG3iXhhe3i)" class="w49j0rbvv"/>`,
		"fallback": "solar:minimalistic-magnifer-zoom-out-bold",
	});
}

export default Component;
