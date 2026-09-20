import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asflqznoh.css';
import '../../css/j/jrtvxenjx.css';
import '../../css/y/yqp43ie7o.css';
import '../../css/t/txrek-rdq.css';
import '../../css/s/snd0mccfa.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="asflqznoh"><path class="jrtvxenjx"/><path class="yqp43ie7o"/><path class="txrek-rdq"/><path class="snd0mccfa"/></g>`,
		"fallback": "material-icon-theme:stylable",
	});
}

export default Component;
