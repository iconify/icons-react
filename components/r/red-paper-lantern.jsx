import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i60630bpe.css';
import '../../css/i/iphmxhb-f.css';
import '../../css/h/hipqqp8vo.css';
import '../../css/k/k3v9wpwxy.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/c/clmcrwg6b.css';
import '../../css/j/jd3jrxv-w.css';
import '../../css/v/vjl_6jw6g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="i60630bpe"/><path class="iphmxhb-f"/><rect class="hipqqp8vo"/><path class="k3v9wpwxy"/><g class="rpvb-o6bq"><path class="clmcrwg6b"/><rect class="jd3jrxv-w"/><path class="vjl_6jw6g"/></g>`,
		"fallback": "openmoji:red-paper-lantern",
	});
}

export default Component;
