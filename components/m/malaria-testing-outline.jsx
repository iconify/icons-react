import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ks7nxgugn.css';
import '../../css/z/z89el8boe.css';
import '../../css/n/ne4wcpa_f.css';
import '../../css/y/y9k7ffiuf.css';
import '../../css/l/l71f3j9ru.css';
import '../../css/j/jqmme-b8j.css';
import '../../css/m/m30v4hbiw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ks7nxgugn"/><path class="z89el8boe"/><path clip-rule="evenodd" class="ne4wcpa_f"/><path clip-rule="evenodd" class="y9k7ffiuf"/><path class="l71f3j9ru"/><path clip-rule="evenodd" class="jqmme-b8j"/><path class="m30v4hbiw"/></g>`,
		"fallback": "healthicons:malaria-testing-outline",
	});
}

export default Component;
