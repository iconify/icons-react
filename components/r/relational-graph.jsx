import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xomm06-3t.css';
import '../../css/c/ch-hf4btb.css';
import '../../css/k/k-1wrccov.css';
import '../../css/q/qlhlliblx.css';
import '../../css/j/j57bdebxi.css';
import '../../css/l/ltnkdzbva.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTWb1wpVA"><g class="rohhhzb0l"><path class="xomm06-3t"/><path class="ch-hf4btb"/><path class="k-1wrccov"/><circle class="qlhlliblx"/><circle class="j57bdebxi"/><circle class="ltnkdzbva"/></g></mask></defs><path mask="url(#SVGTWb1wpVA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:relational-graph",
	});
}

export default Component;
