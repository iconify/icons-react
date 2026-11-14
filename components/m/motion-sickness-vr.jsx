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
		"content": `<style>.tqva6cbfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.237 12.139L13.5 9.75h-3l-2 2.75H5q-.123 0-.245-.012t-.243-.036q-.12-.024-.238-.06t-.231-.082q-.113-.047-.221-.105q-.109-.058-.211-.126q-.102-.069-.197-.146q-.095-.078-.182-.165t-.165-.182q-.077-.095-.146-.197t-.126-.211q-.058-.108-.105-.221q-.047-.114-.082-.231t-.06-.238q-.024-.121-.036-.243T2.5 10V5.5q0-.123.012-.245t.036-.243q.024-.12.06-.238t.082-.231q.047-.113.105-.221q.058-.109.126-.211q.069-.102.146-.197q.078-.095.165-.182t.182-.165q.095-.077.197-.146t.211-.126t.221-.105q.114-.047.231-.082t.238-.06q.121-.024.243-.036T5 3h14q.123 0 .245.012t.243.036t.238.06t.231.082q.113.047.221.105q.109.058.211.126q.102.069.197.146q.095.078.182.165t.165.182t.146.197t.126.211q.058.108.105.221q.047.114.082.231t.06.238t.036.243t.012.245V10q0 .241-.046.477t-.136.46t-.221.425t-.299.375M18 14.5V18m0 3h.01");
}
</style><path class="tqva6cbfi"/>`,
		"fallback": "uix-sharp:motion-sickness-vr",
	});
}

export default Component;
