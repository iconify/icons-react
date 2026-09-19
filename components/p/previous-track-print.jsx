import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/m/mgu_0ee4k.css';
import '../../css/q/qntpqbbcc.css';
import '../../css/a/adbvqchmt.css';
import '../../css/x/xwzw7xbpa.css';
import '../../css/k/k52avhbmr.css';
import '../../css/r/rh0xml3-a.css';
import '../../css/v/vgua-wb1f.css';
import '../../css/c/c9f0-he7i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="mgu_0ee4k"/><path clip-rule="evenodd" class="qntpqbbcc"/><path class="adbvqchmt"/><path clip-rule="evenodd" class="xwzw7xbpa"/><path clip-rule="evenodd" class="k52avhbmr"/></g><path clip-rule="evenodd" class="rh0xml3-a"/><path clip-rule="evenodd" class="vgua-wb1f"/><path clip-rule="evenodd" class="c9f0-he7i"/></g>`,
		"fallback": "pepicons:previous-track-print",
	});
}

export default Component;
