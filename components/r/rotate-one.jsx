import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b_0d5acja.css';
import '../../css/c/cnglzpbpe.css';
import '../../css/f/fezbgdcig.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="b_0d5acja"/><path class="cnglzpbpe"/><circle class="fezbgdcig"/></g>`,
		"fallback": "icon-park:rotate-one",
	});
}

export default Component;
