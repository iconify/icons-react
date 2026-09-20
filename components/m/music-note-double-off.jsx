import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c757m7bdq {
  cx: 5.75px;
  cy: 16px;
  rx: 3px;
  ry: 2.5px;
}

.cuyn6tgcc {
  fill: currentColor;
}

.fix04rbfz {
  cx: 14.75px;
  cy: 15px;
  rx: 3px;
  ry: 2.5px;
}

.hpqtfpzva {
  fill-rule: evenodd;
  d: path("M6.75 3.81a1 1 0 0 1 .906-.996l9-.846a1 1 0 0 1 1.094.996v2.181a1 1 0 0 1-.901.995l-9 .893a1 1 0 0 1-1.099-.995z");
}

.pzlr9db_n {
  fill-rule: evenodd;
  d: path("M15.75 5h2v10h-2zm-9 1h2v10h-2z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="hpqtfpzva"/><ellipse class="fix04rbfz"/><ellipse class="c757m7bdq"/><path clip-rule="evenodd" class="pzlr9db_n"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:music-note-double-off",
	});
}

export default Component;
