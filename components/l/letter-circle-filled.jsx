import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/d/d-z4nbt_f.css';
import '../../css/t/t9kw69ekp.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGZtMa0bFa"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="d-z4nbt_f"/><path class="t9kw69ekp"/></g></mask></defs><circle mask="url(#SVGZtMa0bFa)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:letter-circle-filled",
	});
}

export default Component;
