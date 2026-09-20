import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/m/m8u2axb7o.css';
import '../../css/q/q6x_jq-sk.css';
import '../../css/o/oqc8o1i9f.css';
import '../../css/l/lu22ebasm.css';
import '../../css/k/kjoytpkfo.css';
import '../../css/g/gxybq3bmw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="m8u2axb7o"/><path class="q6x_jq-sk"/></g><path clip-rule="evenodd" class="oqc8o1i9f"/><path class="lu22ebasm"/><path clip-rule="evenodd" class="kjoytpkfo"/><path clip-rule="evenodd" class="gxybq3bmw"/></g>`,
		"fallback": "pepicons-print:photo",
	});
}

export default Component;
