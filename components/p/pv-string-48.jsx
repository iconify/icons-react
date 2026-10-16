import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k989r-bis.css';
import '../../css/l/lr8gvf09r.css';
import '../../css/j/jxg5-_o0q.css';
import '../../css/f/fkgyoyhzs.css';
import '../../css/v/vdh35hb3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k989r-bis"/><path class="lr8gvf09r"/><path class="jxg5-_o0q"/><path class="fkgyoyhzs"/><path class="vdh35hb3g"/>`,
		"fallback": "energy-icons:pv-string-48",
	});
}

export default Component;
