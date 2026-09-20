import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/z/zihu9hb_a.css';
import '../../css/k/kka2iib8a.css';
import '../../css/v/v_au4j-1n.css';
import '../../css/x/xx671wtia.css';
import '../../css/o/o3_8nob6z.css';
import '../../css/j/jt4jfzfzc.css';
import '../../css/h/hihhrhbho.css';
import '../../css/p/paj5i-bki.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="zihu9hb_a"/><path clip-rule="evenodd" class="kka2iib8a"/><path clip-rule="evenodd" class="v_au4j-1n"/><path clip-rule="evenodd" class="xx671wtia"/></g><path clip-rule="evenodd" class="o3_8nob6z"/><path clip-rule="evenodd" class="jt4jfzfzc"/><path clip-rule="evenodd" class="hihhrhbho"/><path clip-rule="evenodd" class="paj5i-bki"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:sword-off",
	});
}

export default Component;
