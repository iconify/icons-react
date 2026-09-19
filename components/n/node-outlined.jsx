import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z85s1yb0b.css';
import '../../css/a/ap43km92m.css';
import '../../css/p/petkfn9pu.css';
import '../../css/l/lff7jfqgd.css';
import '../../css/c/czlb9s-ji.css';
import '../../css/p/pmr8ioscg.css';
import '../../css/z/z11vspk1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="z85s1yb0b"/><circle class="ap43km92m"/><circle class="petkfn9pu"/><circle class="lff7jfqgd"/><path class="czlb9s-ji"/><circle class="pmr8ioscg"/><circle class="z11vspk1k"/>`,
		"fallback": "eos-icons:node-outlined",
	});
}

export default Component;
