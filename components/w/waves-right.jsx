import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/j/jl8syi2ma.css';
import '../../css/z/z5a5a0vtn.css';
import '../../css/s/spkm7oolo.css';
import '../../css/g/guj17g94v.css';
import '../../css/w/wyd-ylb3w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="jl8syi2ma"/><path class="z5a5a0vtn"/><path class="spkm7oolo"/><path class="guj17g94v"/><path class="wyd-ylb3w"/></g>`,
		"fallback": "icon-park:waves-right",
	});
}

export default Component;
