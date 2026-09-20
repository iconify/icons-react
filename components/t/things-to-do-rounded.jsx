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
		"content": `<style>.c7g6r-blv {
  fill: currentColor;
  d: path("M7 19v-4.5h-.961q-.213 0-.357-.144t-.144-.357t.144-.356t.356-.143h.985q.07-1.798 1.365-3.055T11.5 9.023V5.655q0-.35.232-.579t.576-.23h3.461q.344 0 .576.232q.232.233.232.576v1.23q0 .344-.235.576t-.58.232H12.5v1.331q1.817.166 3.113 1.422t1.364 3.055h.985q.212 0 .356.144t.143.357t-.143.356t-.357.143H17V19h2.423q.213 0 .356.144t.144.357t-.144.356t-.356.143H4.577q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143zm1 0h3.5v-4.5H8zm4.5 0H16v-4.5h-3.5z");
}
</style><path class="c7g6r-blv"/>`,
		"fallback": "material-symbols-light:things-to-do-rounded",
	});
}

export default Component;
