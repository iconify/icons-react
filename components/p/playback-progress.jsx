import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/ytsky4ozq.css';
import '../../css/g/g1owdqb7d.css';
import '../../css/n/n5l_c4wos.css';
import '../../css/r/r6viuvbyf.css';
import '../../css/h/hgxe7-bdb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="ytsky4ozq"/><path class="g1owdqb7d"/><path class="n5l_c4wos"/><path class="r6viuvbyf"/><path class="hgxe7-bdb"/></g>`,
		"fallback": "icon-park:playback-progress",
	});
}

export default Component;
