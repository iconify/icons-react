import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/v/viy1xcf2o.css';
import '../../css/b/bfttbipxd.css';
import '../../css/e/ef230lwsc.css';
import '../../css/r/r5dg5ebxv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="viy1xcf2o"/><path class="bfttbipxd"/></g><path class="ef230lwsc"/><path class="r5dg5ebxv"/>`,
		"fallback": "openmoji:thought-balloon",
	});
}

export default Component;
