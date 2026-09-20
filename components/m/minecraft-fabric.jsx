import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9x94cctu.css';
import '../../css/a/az6l6ebbm.css';
import '../../css/l/lxld9q3xq.css';
import '../../css/y/yshtuwb1f.css';
import '../../css/h/h5-39yb0p.css';
import '../../css/o/o5tnf8ojj.css';
import '../../css/u/u2ebk6bxy.css';
import '../../css/h/hd2m3yblq.css';
import '../../css/w/wu_qkplto.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="w9x94cctu"><path class="az6l6ebbm"/><path class="lxld9q3xq"/><path class="yshtuwb1f"/><path class="h5-39yb0p"/><path class="o5tnf8ojj"/><path class="u2ebk6bxy"/><path class="hd2m3yblq"/><path class="wu_qkplto"/></g>`,
		"fallback": "material-icon-theme:minecraft-fabric",
	});
}

export default Component;
