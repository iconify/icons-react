import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef7iwcbpf.css';
import '../../css/x/x5-bpub_f.css';
import '../../css/g/gaj_yvbkp.css';
import '../../css/z/zzp9sd0so.css';
import '../../css/w/wcnzo0buk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ef7iwcbpf"/><path class="x5-bpub_f"/><path class="gaj_yvbkp"/><path class="zzp9sd0so"/><path class="wcnzo0buk"/></g>`,
		"fallback": "streamline-color:music-folder-song",
	});
}

export default Component;
