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
		"content": `<style>.m_f_gubxk {
  d: path("M4.5 19q0-.382.114-.747t.332-.679M16.073 16.5H19.5M15.652 5.873l2.475 2.475l-7.072 7.071l-2.474-2.474Z");
}

.p1s-uzbsq {
  d: path("m8.581 12.945l2.474 2.474l-3.005.531Z");
}

.rffi4p17q {
  d: path("M19.5 10.873V21.5H7q-.123 0-.245-.012t-.243-.036q-.12-.024-.238-.06t-.231-.082t-.221-.105t-.211-.126q-.102-.069-.197-.146q-.095-.078-.182-.165t-.165-.182t-.146-.197t-.126-.211t-.105-.221q-.047-.114-.082-.231t-.06-.238t-.036-.243T4.5 19V5q0-.123.012-.245t.036-.243q.024-.12.06-.238t.082-.231t.105-.221q.058-.109.126-.211q.069-.102.146-.197q.078-.095.165-.182t.182-.165q.095-.077.197-.146t.211-.126q.108-.058.221-.105q.114-.047.231-.082t.238-.06q.121-.024.243-.036T7 2.5h8.073m1.1 0H19.5v3.273");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rffi4p17q"/><path class="m_f_gubxk"/><path class="p1s-uzbsq"/></g>`,
		"fallback": "uix-sharp:sketch-journal",
	});
}

export default Component;
